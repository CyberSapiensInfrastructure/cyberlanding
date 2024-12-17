"use client";

import { motion, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiCode, FiDatabase, FiLayers, FiShield } from "react-icons/fi";

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  description: string;
  contentPosition: "l" | "r";
  Icon: IconType;
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "Smart Contract Wallet",
    title: "Seamless Integration",
    description:
      "Experience uninterrupted gameplay with our Smart Contract Wallet. No more transaction confirmations breaking your immersion. Built on ERC4337 Account Abstraction for maximum security and convenience.",
    contentPosition: "r",
    Icon: FiShield,
  },
  {
    id: 2,
    callout: "Carbon Architecture",
    title: "True Asset Ownership",
    description:
      "Our Nested Asset Structure (Carbon) provides true ownership of in-game assets with on-chain metadata. Combine, separate, and trade your assets with complete transparency and security.",
    contentPosition: "l",
    Icon: FiLayers,
  },
  {
    id: 3,
    callout: "Game Name Service",
    title: "User-Friendly Identity",
    description:
      "Forget complex wallet addresses. With Game Name Service (GNS), players use simple usernames for all interactions, making blockchain gaming accessible to everyone.",
    contentPosition: "r",
    Icon: FiDatabase,
  },
  {
    id: 4,
    callout: "Developer Tools",
    title: "Easy Implementation",
    description:
      "Comprehensive SDK and developer tools make integration a breeze. Built-in support for crafting, trading, and asset management with just a few lines of code.",
    contentPosition: "l",
    Icon: FiCode,
  },
];

const AnimatedFeatures = () => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />
      <div className="-mt-[100vh] hidden md:block" />
      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: FeatureType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
  featureInView: FeatureType;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-cyan-500 px-2 py-1.5 text-xs font-medium text-black">
            {featureInView.callout}
          </span>
          <p className="my-3 text-4xl font-bold text-white">{featureInView.title}</p>
          <p className="text-gray-400">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
  return (
    <div className="relative h-96 w-full rounded-xl bg-gray-800 shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-gray-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="p-2">
        <p className="font-mono text-sm text-gray-300">
          <span className="text-cyan-400">~/cybersapiens</span> {featureInView.callout.toLowerCase()}
        </p>
      </div>

      <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-gray-700">
        <featureInView.Icon />
      </span>
    </div>
  );
};

export default AnimatedFeatures; 