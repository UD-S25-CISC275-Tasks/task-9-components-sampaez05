import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visibile, setVisability] = useState<boolean>(false);

    function switchVisiblity(): void {
        setVisability(!visibile);
    }

    return (
        <div>
            <Button onClick={switchVisiblity}>Reveal Answer</Button>
            {visibile && <div>42</div>}
        </div>
    );
}
