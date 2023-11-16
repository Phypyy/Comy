"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__);
figma.ui.resize(300, 250);
figma.ui.onmessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    if (message.type === 'submitComment') {
        const comment = message.comment;
        const color = message.color;
        const fontSize = Number(message.fontSize);
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        yield figma.loadFontAsync({ family: "Sarabun", style: "Regular" });
        yield figma.loadFontAsync({ family: "Sarabun", style: "Medium" });
        yield figma.loadFontAsync({ family: "Sarabun", style: "SemiBold" });
        const selectedFrame = figma.currentPage.selection[0];
        const frame = figma.createFrame();
        frame.name = "Comment";
        frame.layoutMode = 'VERTICAL';
        frame.counterAxisAlignItems = 'MIN';
        frame.counterAxisSizingMode = 'AUTO';
        frame.horizontalPadding = 24;
        frame.verticalPadding = 24;
        frame.itemSpacing = 24;
        frame.fills = [{ type: 'SOLID', color }];
        const text = figma.createText();
        text.characters = comment;
        text.fontName = { family: 'Sarabun', style: 'Medium' };
        text.fills = [{ type: 'SOLID', color: { r: 0.1608, g: 0.2039, b: 0.2863 } }];
        text.fontSize = fontSize;
        frame.appendChild(text);
        const dropShadowEffect = {
            type: 'DROP_SHADOW',
            color: { r: 0, g: 0, b: 0, a: 0.1 },
            offset: { x: 0, y: 14 },
            radius: 21,
            spread: -5,
            visible: true,
            blendMode: 'NORMAL',
        };
        frame.effects = [dropShadowEffect];
        frame.x = selectedFrame.absoluteTransform[0][2] + selectedFrame.width + 32;
        frame.y = selectedFrame.absoluteTransform[1][2];
        figma.currentPage.appendChild(frame);
        const currentDate = new Date();
        const dateText = currentDate.toLocaleDateString('en-US');
        const dateTimeText = figma.createText();
        dateTimeText.characters = dateText;
        dateTimeText.fontName = { family: 'Sarabun', style: 'SemiBold' };
        dateTimeText.fills = [{ type: 'SOLID', color: { r: 0.1608, g: 0.2039, b: 0.2863 } }];
        dateTimeText.fontSize = 10;
        dateTimeText.blendMode = 'PASS_THROUGH';
        dateTimeText.opacity = 0.6;
        frame.appendChild(dateTimeText);
        //console.log();
    }
});
