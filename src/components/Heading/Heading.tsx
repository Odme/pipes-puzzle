import { HeadingBox } from './HeadingBox';
import { Button } from '../General/Button';
import { Header } from '../General/Header';
import { useServices } from '../../context/ServicesContext/Context';
import { useCallback, useMemo } from 'react';
import { useData } from '../../context/DataContext/Context';

export const Heading = () => {
  const services = useServices();
  const { connected, currentLevel, hasAction, hasFinish, hasStarted, map } =
    useData();

  const onClickLoadMapHandler = useCallback(() => {
    services.requestNewLevel(currentLevel);
    services.requestCurrentMap();
  }, [currentLevel, services]);

  const onClickVerifyHandler = useCallback(() => {
    services.requestVerifyLevel();
  }, [services]);

  const generateLoadTest = useMemo(() => {
    if (hasFinish) {
      return 'Load New Level';
    }
    if (!map) {
      return 'Load Map';
    }
    return 'Reload Map';
  }, [hasFinish, map]);

  return (
    <Header>
      <HeadingBox>
        <Button onClick={onClickLoadMapHandler} disabled={!connected}>
          {generateLoadTest}
        </Button>
        <Button
          onClick={onClickVerifyHandler}
          disabled={!(connected && hasStarted && hasAction)}
        >
          Verify
        </Button>
      </HeadingBox>
    </Header>
  );
};
