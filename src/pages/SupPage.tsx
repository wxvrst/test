import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import DotGrid from "../components/DotGrid";

const SupPage = () => {
    const navigate = useNavigate();
    return (
        <section
            className="w-full h-full flex justify-center items-center"
        >
                <DotGrid
                    dotSize={8}
                    gap={10}
                    baseColor="#FFFFFF"
                    activeColor="#5227FF"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            <div
                className="absolute"
            >
                <Button variant="outlined"
                    onClick={() => navigate(-1)}
                >
                    Go back
                </Button>
            </div>

        </section>
    )
}
export default SupPage;