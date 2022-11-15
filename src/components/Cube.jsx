import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

export default function Cube({color}) {
    // On obtient une référence à l'objet 3D
    const ref = useRef()
    // A chaque frame, on fait tourner l'objet 3D
    useFrame((state, delta) =>  {
        ref.current.rotation.x += delta;
        ref.current.rotation.y += delta;
    })
    return (
        <mesh
            ref={ref}
            scale={1}>
            <boxGeometry args={[1, 1, 1]} />
            {color ? <meshStandardMaterial color={color} /> : <meshNormalMaterial />}
        </mesh>
    )
}