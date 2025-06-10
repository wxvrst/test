import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom";
import Silk from '../components/Silk.tsx';
const NoMatchPage = () => {
    const navigate = useNavigate();
    return (
        <section
            className="w-full h-full flex justify-center items-center"
        >
            <Silk
                speed={6}
                scale={1.2}
                color="#6a9178"
                noiseIntensity={2}
                rotation={0}
            />
            <div
                className="absolute flex flex-col gap-2"
            >
                <span
                    className="text-8xl font-bold"
                >
                    404
                </span>
                <Button variant="outlined"
                    sx={{
                        color: '#fff',
                        borderColor:'#6a9178',
                        '&:hover': {
                            borderColor:'#6da381',
                            backgroundColor: 'rgba(109, 163, 129, 0.2)'
                        },
                        transition: 'all 0.3s ease',
                    }}
                    onClick={() => navigate(-1)}
                >
                    Go back
                </Button>
            </div>

        </section>
    )
}
export default NoMatchPage