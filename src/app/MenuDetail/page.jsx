"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://sardines.thddns.net:7270/public/menu");
  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }
  return await res.json();
};

const ProjectPage = ({ params }) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const resolveParams = async () => {
      const { id: resolvedId } = params;
      if (resolvedId) {
        setId(resolvedId);
      } else {
        console.error("No ID parameter provided");
      }
    };

    resolveParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      const fetchProjectData = async () => {
        try {
          const data = await getData();
          const project = data.find((item) => item.id === parseInt(id));
          if (project) {
            setProject(project);
          } else {
            console.error("Project not found for id:", id);
            setProject(null);
          }
        } catch (error) {
          console.error("Error fetching project:", error);
          setProject(null);
        } finally {
          setLoading(false);
        }
      };

      fetchProjectData();
    }
  }, [id]);

  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleMouseEnter = () => setShowControls(true);
  const handleMouseLeave = () => setShowControls(false);

  const handleImageClick = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (loading) return <div>Loading...</div>;
  if (!project) return <div>Project not found</div>;

  const isImageFallback = (id >= 8 && id <= 32) || (id >= 36 && id <= 47);

  return (
    <div>
      <div className="relative">
        <div
          className="w-full h-96 lg:h-screen bg-center bg-cover"
          style={{
            backgroundImage: `url(${project.banner})`,
          }}
        />
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#040404] to-transparent" />
      </div>

      <div className="w-11/12 mx-auto">
        <div className="md:flex-row md:flex justify-between">
          <div className="py-3 md:pt-10">
            <h1 className="text-white text-5xl">{project.created}</h1>
            <p className="text-gray-600 text-lg font-bold pt-2">Developed by</p>
          </div>
          <div className="text-white py-3 md:pt-10 font-Poppins ">
            <NumberTicker className="text-5xl text-white" value={project.price} />
            <span className="text-5xl"> Bath</span>
            <h1 className="text-lg font-bold pt-2">Price</h1>
          </div>
          <div className="text-white py-3 md:pt-10">
            <NumberTicker
              className="text-5xl text-white font-semibold"
              value={project.developed}
            />
            <span className="text-5xl font-Poppins "> Days</span>
            <h1 className="text-lg font-bold pt-2 font-Poppins ">Development</h1>
          </div>
        </div>

        <div className="w-full lg:w-9/12">
          <h1 className="font-bold text-6xl py-10 text-white">{project.header.header1}</h1>
          <p className="pb-10 text-xl text-white">{project.title.title1}</p>
        </div>

        <div>
          <div className="flex h-full w-full items-center justify-center">
            {isImageFallback ? (
              <div ref={targetRef}>
                <Image
                  className="w-11/12 mx-auto h-full rounded-lg"
                  src={project.banner}
                  alt={project.title.title1}
                  onClick={handleImageClick}
                  width={1000}
                  height={1000}
                />
              </div>
            ) : (
              <div
                ref={targetRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <video
                  ref={videoRef}
                  className="w-11/12 mx-auto h-auto rounded-lg"
                  loop
                  autoPlay
                  muted={!isPlaying}
                  playsInline
                  loading="lazy"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
                {showControls && (
                  <div className="absolute flex justify-center items-center h-full w-full top-0">
                    <button
                      className="bg-white opacity-30 p-5 lg:p-20 rounded-full"
                      onClick={togglePlayPause}
                    >
                      <Image
                        className="w-6 lg:w-12"
                        src={isPlaying ? Pause : Play}
                        alt={isPlaying ? "Pause" : "Play"}
                      />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="w-full lg:w-9/12">
            <h1 className="pt-10 font-bold text-6xl text-white">{project.header.header2}</h1>
            <p className="py-10 text-xl text-white">{project.title.title2}</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 animate-fadeIn">
          <div className="relative animate-scaleUp">
            <Image
              src={project.banner}
              alt={project.title.title1}
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black py-2 px-3 rounded-full"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
