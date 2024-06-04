const HomePage = () => {
  return (
    <div className="w-full p-1 bg-primary rounded-lg shadow-lg">
      <div className="relative overflow-hidden bg-black rounded-lg h-[700px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
          src="https://www.youtube.com/embed/yCgSrluBxus?autoplay=1&mute=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
    </div>
  );
};

export default HomePage;


