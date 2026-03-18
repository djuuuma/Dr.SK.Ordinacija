import React, { useState, useRef, useCallback, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface ImageComparisonProps {
    beforeImage: string;
    afterImage: string;
    altBefore?: string;
    altAfter?: string;
}

export const ImageComparison: React.FC<ImageComparisonProps> = ({
    beforeImage,
    afterImage,
    altBefore = 'Before',
    altAfter = 'After',
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback(
        (clientX: number) => {
            if (!isDragging || !containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            let newPosition = ((clientX - rect.left) / rect.width) * 100;
            newPosition = Math.max(0, Math.min(100, newPosition));
            setSliderPosition(newPosition);
        },
        [isDragging]
    );

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = useCallback(() => setIsDragging(false), []);
    const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);

    const handleTouchStart = () => setIsDragging(true);
    const handleTouchEnd = () => setIsDragging(false);
    const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseUp]);

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto select-none rounded-2xl overflow-hidden shadow-xl group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* After Image (Top Layer) */}
            <div
                className="absolute top-0 left-0 h-full w-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={afterImage}
                    alt={altAfter}
                    className="h-full w-full object-cover object-left"
                    draggable="false"
                />
                {/* "After" Label */}
                <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {altAfter}
                </div>
            </div>

            {/* Before Image (Bottom Layer) */}
            <img
                src={beforeImage}
                alt={altBefore}
                className="block h-full w-full object-cover object-left"
                draggable="false"
            />
            {/* "Before" Label */}
            <div className="absolute top-4 right-4 bg-text-medical/70 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                {altBefore}
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white/90 cursor-ew-resize flex items-center justify-center"
                style={{ left: `calc(${sliderPosition}% - 0.125rem)` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <div
                    className={`bg-white rounded-full h-11 w-11 flex items-center justify-center shadow-lg border-2 border-primary/30 transition-all duration-200 ease-in-out ${
                        isDragging ? 'scale-110 shadow-xl border-primary' : ''
                    }`}
                >
                    <MoveHorizontal className="w-5 h-5 text-primary" />
                </div>
            </div>
        </div>
    );
};
