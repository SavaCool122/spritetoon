import * as xml from 'tsxml';
import { readFile } from '$lib/readFile.js';

export async function svgSpriteParser(file) {
	const content = await readFile(file);
	return await xml.Compiler.parseXmlToAst(content);
}
