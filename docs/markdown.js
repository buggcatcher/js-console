// markdown.js
// Parsing markdown e rendering HTML 

function renderMarkdown(mdText) {
    let html = mdText;
    // Escape HTML
    html = html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    // Blocchi di codice
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    // Codice inline
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    // Titoli (allow leading spaces/tabs)
    html = html.replace(/^\s*###### (.*)$/gm, '<h6>$1</h6>')
               .replace(/^\s*##### (.*)$/gm, '<h5>$1</h5>')
               .replace(/^\s*#### (.*)$/gm, '<h4>$1</h4>')
               .replace(/^\s*### (.*)$/gm, '<h3>$1</h3>')
               .replace(/^\s*## (.*)$/gm, '<h2>$1</h2>')
               .replace(/^\s*# (.*)$/gm, '<h1>$1</h1>');
    // Grassetto **testo**
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // Corsivo *testo*
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    // Link [testo](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    // Liste non ordinate
    html = html.replace(/(^|\n)[\s]*[-*] (.*?)(?=\n|$)/g, '$1<ul><li>$2</li></ul>');
    // Liste ordinate
    html = html.replace(/(^|\n)(\s*)(\d+)\. (.*?)(?=\n|$)/g, function(match, p1, p2, p3, p4) {
        return `${p1}<li value=\"${p3}\">${p4}</li>`;
    });
    // Raggruppa <li> consecutivi in <ol>
    html = html.replace(/(<li value=\"\d+\">[\s\S]*?<\/li>)+/g, function(match) {
        return `<ol>${match}</ol>`;
    });

    // Paragrafi
    html = html.replace(/([^>])\n{2,}/g, '$1</p><p>');
    html = '<p>' + html + '</p>';
    // Unisci paragrafi consecutivi
    html = html.replace(/<\/p><p><\/p><p>/g, '</p><p>');
    return html;
}
window.renderMarkdown = renderMarkdown;
window.markdownReady = (fn) => fn();
