import React, {useRef,useState} from 'react'
import useStore from "@/helpers/store"
import { useFrame } from '@react-three/fiber';
import Player from './Player';
import { throttle } from 'throttle-debounce';
import Bullet from './Bullet';

type Props = {}

const BulletControl = (props: Props) => {
    const [bullets, setBullets] = useState([]);
    const playerRef = useRef(null);

    const spawnBullet = throttle(1000, () => {
        const bulletId = Number(new Date).toString(36)
        setBullets((prevBullets) => [
            ...prevBullets,
            bulletId
        ]);
    });

    const removeBullet = (removeId) => {
        setBullets((prevBullets) => prevBullets.filter((bulletId) => bulletId != removeId));
    }

    useFrame(({camera}) => {
        const { controls } = useStore.getState();
        // console.log(controls)
        if(controls.shoot) {
            console.log('spawning bullet')
            spawnBullet();
        }
    })
  return (
    <>{bullets.map((id, index) => <Bullet key={id} id={id} removeBullet={removeBullet} />)}</>
  )
}

export default BulletControl