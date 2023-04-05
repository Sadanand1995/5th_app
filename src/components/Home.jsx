import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import me from "../assets/logo.png";
import { BsChevronDown } from "react-icons/bs";

const Home = () => {
  const clintCount = useRef(null);
  const projectsCounts = useRef(null);

  const animationCount = (count, ref) => {
    animate(0, count, {
      duration: 1,
      onUpdate: (v) => (ref.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Sadanand Singh
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Designer", "A Developer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:Sadanandsinghc@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +
              <motion.span
                ref={clintCount}
                whileInView={() => animationCount(100, clintCount)}
              >
                100
              </motion.span>
            </p>
            <span>Clint Worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +
                <motion.span
                  ref={projectsCounts}
                  whileInView={() => animationCount(500, projectsCounts)}
                >
                  500
                </motion.span>
              </p>
              <span>Projects Done</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>SadanandisnghC@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Sadanand" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
