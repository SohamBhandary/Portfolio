import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-l from-midnight to-navy p-6 shadow-lg"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 rounded bg-midnight p-2 hover:bg-gray-600"
        >
          <img src="/assets/close.svg" className="w-6 h-6" />
        </button>

        <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
        <p className="mb-4 text-neutral-400">{description}</p>

        {subDescription.map((item, i) => (
          <p key={i} className="mb-2 text-neutral-400">
            • {item}
          </p>
        ))}

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-3">
            {tags.map((tag) => (
              <img
                key={tag.id}
                src={tag.path}
                alt={tag.name}
                className="size-10 rounded-lg"
              />
            ))}
          </div>

          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-medium hover-animation"
            >
              View Project
              <img src="/assets/arrow-up.svg" className="size-4" />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
