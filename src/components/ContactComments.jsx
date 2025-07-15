import { useState, useEffect, useRef } from "react";

const ContactComments = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const isFirstLoad = useRef(true);

  // Load from localStorage once
  useEffect(() => {
    try {
      const saved = localStorage.getItem("comments");
      console.log("📦 loaded from localStorage:", saved);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setComments(parsed);
        }
      }
    } catch (error) {
      console.error("❌ Failed to load comments:", error);
    }
  }, []);

  // Save to localStorage only after first load
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    try {
      localStorage.setItem("comments", JSON.stringify(comments));
      console.log("✅ Comments saved to localStorage", comments);
    } catch (error) {
      console.error("❌ Failed to save comments:", error);
    }
  }, [comments]);

  // Rest of your component...


  // Handle new comment submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || message.trim() === "") {
      alert("Please fill in both name and message.");
      return;
    }

    const newComment = {
      id: Date.now(),
      name,
      message,
    };

    setComments([newComment, ...comments]);
    setName("");
    setMessage("");
  };

  // Handle deleting a comment
  const handleDelete = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div
      className="bg-neutral-800 px-4 sm:px-8 pt-8 pb-16 rounded-2xl w-full md:max-w-[900px] shadow-[0_5px_30px_rgba(252,161,95,0.5)]"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="800"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#fca15f] mb-5">
        Comments
      </h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit}>
        <div
          className="flex flex-col space-y-3 mb-6"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="800"
        >
          <label className="text-white text-2xl font-medium">Name</label>
          <div className="flex items-center border border-gray-500 rounded-md px-4 py-3 bg-neutral-600 focus-within:border-[#fca15f] transition">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 bg-neutral-600 text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <div
          className="flex flex-col space-y-3 mb-6"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="800"
        >
          <label className="text-white text-2xl font-medium">Message</label>
          <div className="flex items-center border border-gray-500 rounded-md px-4 py-3 bg-neutral-600 focus-within:border-[#fca15f] transition">
            <textarea
              placeholder="Your Message"
              rows="8"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-neutral-600 text-white placeholder-gray-400 focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-black rounded-md h-12 font-semibold bg-gradient-to-r from-[#fca15f] to-[#e6733f] hover:from-[#e6733f] hover:to-[#fca15f] hover:shadow-[0_0_15px_rgba(252,161,95,0.7)] active:scale-95 active:ring active:ring-[#fca15f] active:ring-offset-2 transition-all duration-300 flex items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="800"
        >
          <i className="bx bxs-send"></i> Post Comment
        </button>
      </form>

      {/* Comments List */}
      <div
        className="bg-neutral-700 px-6 py-8 overflow-y-auto no-scrollbar rounded-lg shadow-md mt-16 h-[350px]"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="800"
      >
        <div className="flex flex-col gap-4">
          {comments.length === 0 && (
            <p className="text-gray-400 text-center">No comments yet.</p>
          )}
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex flex-col bg-neutral-600 rounded-xl px-4 py-3 gap-2 relative"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#fca15f]">
                  {comment.name}
                </span>
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="text-red-400 hover:text-red-300 text-sm px-2 py-1 rounded transition"
                >
                  Delete
                </button>
              </div>
              <p className="text-white">{comment.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactComments;
