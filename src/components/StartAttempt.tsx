import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProg, setInProg] = useState<boolean>(false);

    function startQuiz() {
        setAttempts(attempts - 1);
        setInProg(true);
    }

    function stopQuiz() {
        setInProg(false);
    }

    function mulligan() {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>Attempts Left: {attempts}</div>
            <Button onClick={startQuiz} disabled={inProg || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProg}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProg}>
                Mulligan
            </Button>
        </div>
    );
}
