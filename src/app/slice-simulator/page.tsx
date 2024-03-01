"use client";

import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";

/**
 * You can probably ignore this page. It renders the Slice simulator
 * that appear in Slice Machine.
 */
export default function SliceSimulatorPage() {
  return (
    <SliceSimulator
      background="#070815"
      // The "sliceZone" prop should be a function receiving Slices and
      // rendering them using your "SliceZone" component.
      sliceZone={(props) => <SliceZone {...props} components={components} />}
    />
  );
}
