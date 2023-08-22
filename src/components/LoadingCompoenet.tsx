import "./LoadingCompoenet.css";
export function LoadingComponent() {

  

  return (
    <>
      <div>
        <div className="animationWindow" id="loadingContainer">
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      </div>
    </>
  );
}
