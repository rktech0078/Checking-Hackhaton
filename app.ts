import html2pdf from 'html2pdf.js';

const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContainer = document.getElementById('resumeContainer') as HTMLDivElement;
const shareLinkContainer = document.getElementById('shareLinkContainer') as HTMLDivElement;
const shareLink = document.getElementById('shareLink') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('downloadPdf') as HTMLButtonElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Show resume
    document.getElementById('resumeName')!.textContent = name;
    document.getElementById('resumeEmail')!.textContent = `Email: ${email}`;
    document.getElementById('resumeEducation')!.textContent = education;
    document.getElementById('resumeExperience')!.textContent = experience;

    resumeContainer.style.display = 'block';

    // Generate unique URL
    const url = generateUniqueURL(username);
    shareLink.href = url;
    shareLink.textContent = url;
    shareLinkContainer.style.display = 'block';
});

function generateUniqueURL(username: string): string {
    return `https://${username}.vercel.app/resume`;
}

function downloadResumeAsPDF() {
    const resumeElement = document.getElementById('resumeContainer')!;
    const options = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(resumeElement).set(options).save();
}

downloadPdfButton.addEventListener('click', downloadResumeAsPDF);
