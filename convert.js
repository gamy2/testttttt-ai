const fs = require('fs');
const path = require('path');

function convertHtmlToJsx(htmlContent) {
    // Extract body content
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let body = bodyMatch ? bodyMatch[1] : htmlContent;

    // Remove comments
    body = body.replace(/<!--[\s\S]*?-->/g, '');

    // Replace class= with className=
    body = body.replace(/class=/g, 'className=');
    body = body.replace(/for=/g, 'htmlFor=');

    // Make self-closing tags
    body = body.replace(/<img(.*?)>/g, (match, p1) => {
        if(p1.endsWith('/')) return match;
        return `<img${p1} />`;
    });
    body = body.replace(/<input(.*?)>/g, (match, p1) => {
        if(p1.endsWith('/')) return match;
        return `<input${p1} />`;
    });
    body = body.replace(/<br>/g, '<br />');
    body = body.replace(/<hr(.*?)>/g, (match, p1) => {
        if(p1.endsWith('/')) return match;
        return `<hr${p1} />`;
    });

    // Replace inline styles if any (none in this specific HTML except what's in head, but we ignore head)

    return body;
}

const homeHtml = fs.readFileSync(path.join(__dirname, '../screen_code.html'), 'utf-8');
const productsHtml = fs.readFileSync(path.join(__dirname, '../product_screen_code.html'), 'utf-8');

const homeJsxBody = convertHtmlToJsx(homeHtml);
const productsJsxBody = convertHtmlToJsx(productsHtml);

const homeComponent = `
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            ${homeJsxBody}
        </>
    );
}
`;

const productsComponent = `
import Image from "next/image";
import Link from "next/link";

export default function Products() {
    return (
        <>
            ${productsJsxBody}
        </>
    );
}
`;

fs.writeFileSync(path.join(__dirname, 'src/app/page.tsx'), homeComponent);
fs.mkdirSync(path.join(__dirname, 'src/app/products'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'src/app/products/page.tsx'), productsComponent);

console.log("Conversion complete.");
