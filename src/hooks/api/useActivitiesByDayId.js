import * as activitiesApi from '../../services/activitiesApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useActivitiesByDayId(dayId) {
  const token = useToken();

  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
    act: getActivities,
  } = useAsync(() => activitiesApi.getActivitiesByDayId(token, dayId));

  return {
    activities,
    activitiesLoading,
    activitiesError,
    getActivities,
  };
}
