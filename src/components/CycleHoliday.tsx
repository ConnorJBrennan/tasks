import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🐇");
    function holidayByAlphabet(): void {
        setHoliday(
            holiday === "🎁" ? "🐇"
            : holiday === "🐇" ? "🎃"
            : holiday === "🎃" ? "🎆"
            : holiday === "🎆" ? "🦃"
            : "🎁",
        );
    }
    function holidayByYear(): void {
        setHoliday(
            holiday === "🐇" ? "🎆"
            : holiday === "🎆" ? "🎃"
            : holiday === "🎃" ? "🦃"
            : holiday === "🦃" ? "🎁"
            : "🐇",
        );
    }
    return (
        <div>
            <span>Holiday: {holiday}</span>{" "}
            <span>
                <Button onClick={holidayByAlphabet}>Advance By Alphabet</Button>
            </span>
            <span>
                <Button onClick={holidayByYear}>Advance By Year</Button>
            </span>
        </div>
    );
}
