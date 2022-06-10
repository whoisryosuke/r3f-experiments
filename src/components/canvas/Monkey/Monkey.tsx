import React, { useEffect, useMemo } from "react";
import { useConvexPolyhedron } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { Geometry } from "three-stdlib";
import { Vector3 } from "three";

/**
 * Returns legacy geometry vertices, faces for ConvP
 * @param {THREE.BufferGeometry} bufferGeometry
 */
function toConvexProps(bufferGeometry) {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry);
  // Merge duplicate vertices resulting from glTF export.
  // Cannon assumes contiguous, closed meshes to work
  geo.mergeVertices();
  return [geo.vertices.map((v) => [v.x, v.y, v.z]), geo.faces.map((f) => [f.a, f.b, f.c]), []]; // prettier-ignore
}

export default function Monkey(props) {
  // Required stuff
  const { nodes } = useGLTF("/models/monkey.glb");

  // Make sure to check the console log above for the mesh name
  // it changes per model/file - it usually matches object name in Blender/3D app
  // console.log("nodes", nodes);
  const geo = useMemo(() => toConvexProps(nodes.Suzanne.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({
    mass: 1,
    ...props,
    args: geo,
  }));

  // This is for effect - not required
  const vec = new Vector3();
  const factor = 0.5;
  useEffect(
    () =>
      api.position.subscribe((p) =>
        api.applyForce(
          vec
            .set(...p)
            .normalize()
            .multiplyScalar(-factor * 35)
            .toArray(),
          [0, 0, 0]
        )
      ),
    [api]
  );
  return (
    <mesh
      castShadow
      receiveShadow
      ref={ref}
      geometry={nodes.Suzanne.geometry}
      {...props}
    >
      <meshStandardMaterial
        //   wireframe
        color="blue"
      />
    </mesh>
  );
}
