const HomePage = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/watch?v=yCgSrluBxus"
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

