"use client";
import { motion, MotionProps } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";

type MotionSectionProps = ComponentPropsWithoutRef<"section"> & MotionProps;

export function MotionSection(props: MotionSectionProps) {
  return <motion.section {...props} />;
}

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

 