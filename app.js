const chapters = window.CHAPTERS || [];

const state = {
  chapterIndex: 0,
  questionIndex: 0,
  answers: [],
  locked: false
};

const els = {
  chapterList: document.getElementById("chapterList"),
  chapterEyebrow: document.getElementById("chapterEyebrow"),
  chapterTitle: document.getElementById("chapterTitle"),
  chapterDescription: document.getElementById("chapterDescription"),
  materialCard: document.getElementById("materialCard"),
  materialTitle: document.getElementById("materialTitle"),
  materialDescription: document.getElementById("materialDescription"),
  materialLink: document.getElementById("materialLink"),
  materialFrame: document.getElementById("materialFrame"),
  materialDetails: document.getElementById("materialDetails"),
  additionalMaterials: document.getElementById("additionalMaterials"),
  contentCard: document.getElementById("contentCard"),
  contentContainer: document.getElementById("contentContainer"),
  statsGrid: document.querySelector(".stats-grid"),
  progressTrack: document.querySelector(".progress-track"),
  resetButton: document.getElementById("resetButton"),
  progressText: document.getElementById("progressText"),
  correctText: document.getElementById("correctText"),
  wrongText: document.getElementById("wrongText"),
  accuracyText: document.getElementById("accuracyText"),
  progressBar: document.getElementById("progressBar"),
  quizCard: document.getElementById("quizCard"),
  completionCard: document.getElementById("completionCard"),
  completionSummary: document.getElementById("completionSummary"),
  questionNumber: document.getElementById("questionNumber"),
  questionType: document.getElementById("questionType"),
  questionTopic: document.getElementById("questionTopic"),
  questionPrompt: document.getElementById("questionPrompt"),
  codeBlock: document.getElementById("codeBlock"),
  codeText: document.getElementById("codeText"),
  optionsForm: document.getElementById("optionsForm"),
  feedback: document.getElementById("feedback"),
  feedbackTitle: document.getElementById("feedbackTitle"),
  feedbackText: document.getElementById("feedbackText"),
  feedbackReference: document.getElementById("feedbackReference"),
  completionEyebrow: document.getElementById("completionEyebrow"),
  answerButton: document.getElementById("answerButton"),
  nextButton: document.getElementById("nextButton"),
  restartCompletionButton: document.getElementById("restartCompletionButton")
};

function currentChapter() {
  return chapters[state.chapterIndex];
}

function storageKey(chapter) {
  return `cd-revisao:${chapter.id}`;
}

function saveProgress() {
  const chapter = currentChapter();
  localStorage.setItem(storageKey(chapter), JSON.stringify({
    questionIndex: state.questionIndex,
    answers: state.answers
  }));
}

function loadProgress(chapter) {
  const saved = localStorage.getItem(storageKey(chapter));
  if (!saved) {
    state.questionIndex = 0;
    state.answers = [];
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    state.answers = Array.isArray(parsed.answers) ? parsed.answers : [];
    state.questionIndex = Number.isInteger(parsed.questionIndex) ? parsed.questionIndex : state.answers.length;
  } catch {
    state.questionIndex = 0;
    state.answers = [];
  }
}

function renderChapterNav() {
  els.chapterList.innerHTML = "";

  chapters.forEach((chapter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chapter-button${index === state.chapterIndex ? " active" : ""}`;
    const navTitle = chapter.navLabel || `${chapter.number}. ${chapter.title}`;
    const navMeta = chapter.navMeta || `${chapter.questions.length} questões`;
    button.innerHTML = `<strong>${navTitle}</strong><small>${navMeta}</small>`;
    button.addEventListener("click", () => selectChapter(index));
    els.chapterList.appendChild(button);
  });
}

function selectChapter(index) {
  state.chapterIndex = index;
  state.locked = false;
  const chapter = currentChapter();
  if (chapter.kind === "content") {
    state.questionIndex = 0;
    state.answers = [];
  } else {
    loadProgress(chapter);
  }
  renderChapterNav();
  renderChapter();
}

function renderChapter() {
  const chapter = currentChapter();

  const sectionLabel = chapter.sectionLabel || "Capítulo";
  els.chapterEyebrow.textContent = `${sectionLabel} ${chapter.number}`;
  els.chapterTitle.textContent = chapter.title;
  els.chapterDescription.textContent = chapter.description;
  els.resetButton.textContent = `Reiniciar ${sectionLabel.toLowerCase()}`;
  renderMaterial(chapter);

  if (chapter.kind === "content") {
    renderContentChapter(chapter);
    return;
  }

  els.contentCard.hidden = true;
  els.statsGrid.hidden = false;
  els.progressTrack.hidden = false;
  els.resetButton.hidden = false;

  if (state.questionIndex >= chapter.questions.length) {
    renderCompletion();
    return;
  }

  els.quizCard.hidden = false;
  els.completionCard.hidden = true;
  renderQuestion();
  updateStats();
}


function renderContentChapter(chapter) {
  els.contentCard.hidden = false;
  els.contentContainer.innerHTML = chapter.contentHtml || "";
  els.statsGrid.hidden = true;
  els.progressTrack.hidden = true;
  els.resetButton.hidden = true;
  els.quizCard.hidden = true;
  els.completionCard.hidden = true;
}


function createAdditionalMaterialCard(material) {
  const section = document.createElement("section");
  section.className = "material-card";

  const header = document.createElement("div");
  header.className = "material-header";

  const textWrapper = document.createElement("div");
  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "Material do projeto";

  const title = document.createElement("h3");
  title.textContent = material.title;

  const description = document.createElement("p");
  description.textContent = material.description || "";

  textWrapper.append(eyebrow, title, description);

  const link = document.createElement("a");
  link.className = "secondary-button material-link";
  link.href = material.path;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Abrir PDF";

  header.append(textWrapper, link);

  const details = document.createElement("details");
  details.className = "material-details";

  const summary = document.createElement("summary");
  summary.textContent = "Ler dentro da plataforma";

  const frameWrapper = document.createElement("div");
  frameWrapper.className = "pdf-frame-wrapper";

  const frame = document.createElement("iframe");
  frame.title = `${material.title} em PDF`;
  frame.loading = "lazy";
  frame.src = material.path;
  frameWrapper.appendChild(frame);

  const note = document.createElement("p");
  note.className = "material-mobile-note";
  note.textContent = "Se o PDF não abrir dentro do navegador do telefone, use o botão “Abrir PDF”.";

  details.append(summary, frameWrapper, note);
  section.append(header, details);

  return section;
}

function renderMaterial(chapter) {
  const material = chapter.material;
  const additionalMaterials = Array.isArray(chapter.additionalMaterials) ? chapter.additionalMaterials : [];

  els.additionalMaterials.innerHTML = "";

  if (!material) {
    els.materialCard.hidden = true;
    els.materialTitle.textContent = "";
    els.materialDescription.textContent = "";
    els.materialLink.removeAttribute("href");
    els.materialFrame.removeAttribute("src");
    els.materialDetails.open = false;
  } else {
    els.materialCard.hidden = false;
    els.materialTitle.textContent = material.title;
    els.materialDescription.textContent = material.description || "";
    els.materialLink.href = material.path;
    els.materialFrame.src = material.path;
  }

  additionalMaterials.forEach(item => {
    els.additionalMaterials.appendChild(createAdditionalMaterialCard(item));
  });
}

function renderQuestion() {
  const chapter = currentChapter();
  const question = chapter.questions[state.questionIndex];
  state.locked = false;

  els.questionNumber.textContent = `Questão ${state.questionIndex + 1} de ${chapter.questions.length}`;
  els.questionType.textContent = question.type;
  els.questionTopic.textContent = question.topic;
  els.questionPrompt.textContent = question.prompt;

  if (question.code) {
    els.codeBlock.hidden = false;
    els.codeText.textContent = question.code;
  } else {
    els.codeBlock.hidden = true;
    els.codeText.textContent = "";
  }

  els.optionsForm.innerHTML = "";
  question.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = index;

    const text = document.createElement("span");
    text.textContent = option;

    label.appendChild(radio);
    label.appendChild(text);
    els.optionsForm.appendChild(label);
  });

  els.feedback.hidden = true;
  els.feedback.className = "feedback";
  els.feedbackTitle.textContent = "";
  els.feedbackText.textContent = "";
  els.feedbackReference.textContent = "";
  els.feedbackReference.hidden = true;
  els.answerButton.hidden = false;
  els.answerButton.disabled = false;
  els.nextButton.hidden = true;
}

function submitAnswer() {
  if (state.locked) return;

  const selected = els.optionsForm.querySelector('input[name="answer"]:checked');
  if (!selected) {
    els.feedback.hidden = false;
    els.feedback.className = "feedback error";
    els.feedbackTitle.textContent = "Selecione uma alternativa.";
    els.feedbackText.textContent = "Escolha uma opção antes de responder.";
    return;
  }

  const chapter = currentChapter();
  const question = chapter.questions[state.questionIndex];
  const selectedIndex = Number(selected.value);
  const isCorrect = selectedIndex === question.answer;

  state.locked = true;
  state.answers.push({
    questionIndex: state.questionIndex,
    selectedIndex,
    correct: isCorrect
  });

  [...els.optionsForm.querySelectorAll(".option")].forEach((label, index) => {
    const input = label.querySelector("input");
    input.disabled = true;

    if (index === question.answer) {
      label.classList.add("correct-option");
    }
    if (index === selectedIndex && !isCorrect) {
      label.classList.add("wrong-option");
    }
  });

  els.feedback.hidden = false;
  els.feedback.className = `feedback ${isCorrect ? "success" : "error"}`;
  els.feedbackTitle.textContent = isCorrect ? "Resposta correta." : `Resposta incorreta. Correta: ${question.options[question.answer]}`;
  els.feedbackText.textContent = question.explanation;
  if (question.reference) {
    els.feedbackReference.textContent = `No material: ${question.reference}`;
    els.feedbackReference.hidden = false;
  } else {
    els.feedbackReference.textContent = "";
    els.feedbackReference.hidden = true;
  }

  els.answerButton.hidden = true;
  els.nextButton.hidden = false;

  saveProgress();
  updateStats();
}

function nextQuestion() {
  const chapter = currentChapter();
  state.questionIndex += 1;
  saveProgress();

  if (state.questionIndex >= chapter.questions.length) {
    renderCompletion();
  } else {
    renderQuestion();
    updateStats();
  }
}

function updateStats() {
  const chapter = currentChapter();
  const totalAnswered = state.answers.length;
  const correct = state.answers.filter(item => item.correct).length;
  const wrong = totalAnswered - correct;
  const accuracy = totalAnswered === 0 ? 0 : Math.round((correct / totalAnswered) * 100);
  const progress = Math.round((totalAnswered / chapter.questions.length) * 100);

  els.progressText.textContent = `${totalAnswered}/${chapter.questions.length}`;
  els.correctText.textContent = correct;
  els.wrongText.textContent = wrong;
  els.accuracyText.textContent = `${accuracy}%`;
  els.progressBar.style.width = `${progress}%`;
}

function renderCompletion() {
  const chapter = currentChapter();
  const correct = state.answers.filter(item => item.correct).length;
  const total = chapter.questions.length;
  const accuracy = total === 0 ? 0 : Math.round((correct / total) * 100);

  els.quizCard.hidden = true;
  els.completionCard.hidden = false;
  const sectionLabel = chapter.sectionLabel || "Capítulo";
  els.completionEyebrow.textContent = `${sectionLabel} concluído`;
  els.completionCard.querySelector("h3").textContent = `${chapter.title} finalizado.`;
  els.completionSummary.textContent = `Você acertou ${correct} de ${total} questões (${accuracy}% de aproveitamento). Você pode reiniciar o capítulo para revisar novamente.`;

  updateStats();
}

function resetChapter() {
  const chapter = currentChapter();
  localStorage.removeItem(storageKey(chapter));
  state.questionIndex = 0;
  state.answers = [];
  state.locked = false;
  renderChapter();
}

els.answerButton.addEventListener("click", submitAnswer);
els.nextButton.addEventListener("click", nextQuestion);
els.resetButton.addEventListener("click", resetChapter);
els.restartCompletionButton.addEventListener("click", resetChapter);

if (chapters.length === 0) {
  document.body.innerHTML = "<p>Nenhum capítulo carregado.</p>";
} else {
  if (currentChapter().kind !== "content") {
    loadProgress(currentChapter());
  }
  renderChapterNav();
  renderChapter();
}
