
import React, { useState, useEffect, useRef } from 'react';

export const useDraggable = (el, horizontal, vertical) => {
    const [{ dx, dy }, setOffset] = useState({
        dx: 0,
        dy: 0
    });

    useEffect(() => {
        const onMouseDown = (e) => {
            //e.stopPropagation();
            const startX = e.clientX - dx;
            const startY = e.clientY - dy;
            console.log(e.clientX, dx);
            const onMouseMove = (e) => {
                const newDx = e.clientX - startX;
                const newDy = e.clientY - startY;

                setOffset({
                    dx: newDx,
                    dy: newDy
                })
            }

            document.addEventListener('mousemove', onMouseMove);

            document.addEventListener(
                'mouseup',
                () => {
                    document.removeEventListener('mousemove', onMouseMove);
                },
                { once: true },
            )
        }

        el.current.addEventListener('mousedown', onMouseDown,);

        return () => {
            el.current.removeEventListener('mousedown', onMouseDown);
        }
    }, [dy])

    useEffect(() => {
        el.current.style.transform = `translate3d(${horizontal || (!horizontal && !vertical) ? dx : 0}px,${vertical || (!horizontal && !vertical) ? dy : 0}px,0)`
    }, [dy])

}

export const Draggable = ({ children, horizontal, vertical }) => {
    const elRef = useRef(null);
    useDraggable(elRef, horizontal, vertical)

    return (
        <div ref={elRef}>
            {children}
        </div>
    )
}