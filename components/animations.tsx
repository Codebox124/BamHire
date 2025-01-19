export const fromRightToLeft = {
    initial:{opacity:0, x:100},
    whileInView:{opacity:1, x:0},
    transitition:{duration:0.7, ease:"easeInOut"},
    viewPort:{once:true}
}

export const fromLeftToRight = {
    initial:{opacity:0, x:-100},
    whileInView:{opacity:1, x:0},
    transitition:{duration:0.7, ease:"easeInOut"},
    viewPort:{once:true}
}

export const fromBottomToTop = {
    initial:{opacity:0, y:50},
    whileInView:{opacity:1, y:0},
    transitition:{duration:0.7, ease:"easeInOut"},
    viewPort:{once:true}
}

export const fromTopToBottom = {
    initial:{opacity:0, y:-50},
    whileInView:{opacity:1, y:0},
    transitition:{duration:0.7, ease:"easeInOut"},
    viewPort:{once:true}
}