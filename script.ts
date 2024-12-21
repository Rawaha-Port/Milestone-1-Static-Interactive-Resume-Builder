import { jsPDF } from "jspdf";

document.getElementById('downloadBtn')?.addEventListener('click', function() {

  const resumeContainer = document.querySelector('.resume-container') as HTMLElement;


  if (resumeContainer) {
    const doc = new jsPDF();

    doc.html(resumeContainer, {
      callback: function (doc) {

        doc.save('resume.pdf');
      }
    });
  } else {
    console.error('Resume container not found');
  }
});
