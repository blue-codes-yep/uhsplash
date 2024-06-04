const HomePage = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative pb-[56.25%] overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/yCgSrluBxus"
          style={{ border: '0' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
    </div>
  );
};

export default HomePage;



