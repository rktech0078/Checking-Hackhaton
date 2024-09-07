"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var html2pdf_js_1 = require("html2pdf.js");
var form = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resumeContainer');
var shareLinkContainer = document.getElementById('shareLinkContainer');
var shareLink = document.getElementById('shareLink');
var downloadPdfButton = document.getElementById('downloadPdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    // Show resume
    document.getElementById('resumeName').textContent = name;
    document.getElementById('resumeEmail').textContent = "Email: ".concat(email);
    document.getElementById('resumeEducation').textContent = education;
    document.getElementById('resumeExperience').textContent = experience;
    resumeContainer.style.display = 'block';
    // Generate unique URL
    var url = generateUniqueURL(username);
    shareLink.href = url;
    shareLink.textContent = url;
    shareLinkContainer.style.display = 'block';
});
function generateUniqueURL(username) {
    return "https://".concat(username, ".vercel.app/resume");
}
function downloadResumeAsPDF() {
    var resumeElement = document.getElementById('resumeContainer');
    var options = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    (0, html2pdf_js_1.default)().from(resumeElement).set(options).save();
}
downloadPdfButton.addEventListener('click', downloadResumeAsPDF);
