import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <section
            className="w-full h-full flex justify-center items-center"
        >
            
            <div
                className="absolute flex justify-center items-center gap-2"
            >
                <Button variant="outlined">
                    <Link to="sub/">
                        To subPage
                    </Link>
                </Button>
                <Button variant="outlined">
                    <Link to="login/">
                        To login
                    </Link>
                </Button>
            </div>
        </section>
    )
}
export default MainPage