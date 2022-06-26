import { FC, Fragment, useCallback, useEffect } from 'react';
import { useBounds } from '@react-three/drei';

import Tube from '../Pipe/Pipe';
import { useData } from '../../context/DataContext/Context';
import { useServices } from '../../context/ServicesContext/Context';
import PlaneBox from '../PlaneBox';

export const PipesTable: FC = () => {
  const { map } = useData();
  const services = useServices();
  const bounds = useBounds();

  useEffect(() => {
    if (map) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      bounds.refresh().clip().fit();
    }
  }, [bounds, map]);

  const rotatePipe = useCallback(
    (x: number, y: number) => services.requestRotatePipe(x, y),
    [services],
  );

  return (
    <>
      {map?.map((tubesRow, xIndex) =>
        tubesRow?.map((tube, yIndex) => {
          return map[yIndex] ? (
            <Fragment key={`${tube}-${xIndex}-${yIndex}`}>
              <PlaneBox
                position={[(xIndex + 0.5) * 4.2, (yIndex - 0.3) * -5.2, 0]}
                coordenates={{ x: xIndex, y: yIndex }}
                onRotate={rotatePipe}
              />
              <Tube
                position={[xIndex * 4.2, yIndex * -5.2, 0.01]}
                character={map[yIndex][xIndex]}
              />
            </Fragment>
          ) : null;
        }),
      )}
    </>
  );
};
