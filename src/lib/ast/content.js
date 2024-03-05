import * as xml from 'tsxml';

const byTagName = (name) => (value) => value.tagName === name;
const bySvg = byTagName('svg');

async function createSvgAst() {
	const container = new xml.ast.ContainerNode();
	container.tagName = 'svg';
	return container;
}

async function processIconsMap(astSvgSymbol, options) {
	const svg = await createSvgAst();
	const { viewBox, id } = astSvgSymbol.attrList;
	svg.attrList = { xmlns: options.xmlns, viewBox };
	svg.childNodes = astSvgSymbol.childNodes;
	return {
		svg: svg.toString(),
		params: { id: id || null }
	};
}

export async function astToListIcons(ast) {
	const svg = ast.childNodes.find(bySvg);
	const { xmlns } = svg.attrList;
	const icons = await Promise.all(svg.childNodes.map((value) => processIconsMap(value, { xmlns })));
	return icons;
}
