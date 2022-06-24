import { HeadingBox } from './HeadingBox';
import { Button } from '../General/Button';
import { Header } from '../General/Header';
import { useServices } from '../../context/ServicesContext/Context';
import { useCallback } from 'react';
import { useData } from '../../context/DataContext/Context';

export const Heading = () => {
  const services = useServices();
  const { currentLevel, hasStarted, hasAction } = useData();

  const onClickLoadMapHandler = useCallback(() => {
    services.requestNewLevel(currentLevel);
    services.requestCurrentMap();
  }, [currentLevel, services]);

  const onClickVerifyHandler = useCallback(() => {
    services.requestVerifyLevel();
  }, [services]);

  return (
    <Header>
      <HeadingBox>
        <Button onClick={onClickLoadMapHandler}>Reload Map</Button>
        <Button
          disabled={!(hasStarted && hasAction)}
          onClick={onClickVerifyHandler}
        >
          Verify
        </Button>
        <Button onClick={() => services.requestRotatePipe(0, 0)}>
          Rotate Test
        </Button>
      </HeadingBox>
    </Header>
  );
};
