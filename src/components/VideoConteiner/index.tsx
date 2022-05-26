import { VideoWindow, Wrapper } from "./style";

export default function VideoConteiner() {
    return (
        <Wrapper>
            <div className="title">
                <h1 className="lowercase">Re(descubra) a beleza que há em você!</h1>
            </div>
            <VideoWindow>
                <iframe 
                    src="https://www.youtube.com/embed/GdK9u0RyDEw" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                />                
            </VideoWindow>
        </Wrapper>
    )
}