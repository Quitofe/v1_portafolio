import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDir = path.join(process.cwd(), 'content');

export async function getMarkdownContent(fileName) {
    const filePath = path.join(contentDir, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const matterResult = matter(fileContent);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content); 
    
    const contentHtml = processedContent.toString();

    return {
        contentHtml,
        ...matterResult.data,
    };
}
