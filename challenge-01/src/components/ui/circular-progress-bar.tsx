// https://css-tricks.com/building-progress-ring-quickly/

function CircularProgressBar() {
    return (
        <div className="flex items-center justify-center h-full bg-violet-600">
            <div className="bg-white rounded-lg p-12 flex flex-col items-center gap-y-8">
                <div className="circular-progress relative h-64 w-64 bg-pink-500 rounded-full bg-[conic-gradient(at bottom top, rgb(209, 213, 219), rgb(192, 38, 211), rgb(234, 88, 12))]">
                    <span className="progress-value">0%</span>
                </div>

                <span className="text">
                    HTML &amp; CSS
                </span>
            </div>
        </div>
    );
}

export default CircularProgressBar;


