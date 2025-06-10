import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Iridescence from "../components/Iridescence";
const SubPage = () => {
    const navigate = useNavigate();
    return (
        <section
            className="w-full h-full flex justify-center items-center"
        >
            <Iridescence
                color={[1, 1, 1]}
                mouseReact={false}
                amplitude={0.2}
                speed={1.0}
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
export default SubPage;