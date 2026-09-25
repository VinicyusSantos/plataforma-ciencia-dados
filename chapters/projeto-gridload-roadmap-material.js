window.CHAPTERS = window.CHAPTERS || [];

const gridLoadProjectChapter = window.CHAPTERS.find(chapter => chapter.id === "projeto-gridload");

if (gridLoadProjectChapter) {
  gridLoadProjectChapter.additionalMaterials = [
    {
      title: "GridLoad Intelligence BR — Roadmap Completo",
      description: "Roadmap completo de desenvolvimento do projeto, do escopo inicial até validação, dashboard, documentação e apresentação final.",
      path: "materials/gridload-intelligence-br-roadmap-completo.pdf"
    }
  ];
}
