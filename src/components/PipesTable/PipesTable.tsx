import { FC, Fragment, useCallback, useEffect } from 'react';
import { useBounds } from '@react-three/drei';

import Pipe from '../Pipe/Pipe';
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
      bounds.refresh().fit();
    }
  }, [bounds, map]);

  const rotatePipe = useCallback(
    (x: number, y: number) => services.requestRotatePipe(x, y),
    [services],
  );

  return (
    <>
      {map?.map((tubesRow, rowIndex) =>
        tubesRow?.map((tube, columnIndex) => {
          return (
            <Fragment key={`${tube}-${rowIndex}-${columnIndex}`}>
              <PlaneBox
                position={[
                  (columnIndex + 0.5) * 4.2,
                  (rowIndex - 0.3) * -5.2,
                  0,
                ]}
                coordenates={{ x: columnIndex, y: rowIndex }}
                onRotate={rotatePipe}
              />
              <Pipe
                position={[columnIndex * 4.2, rowIndex * -5.2, 0.01]}
                character={map[rowIndex][columnIndex]}
              />
            </Fragment>
          );
        }),
      )}
    </>
  );
};
