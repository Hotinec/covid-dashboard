import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mapTooltip: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
  },
  mapTooltipField: {
    display: 'flex',
    alignItems: 'center',
  },
  tooltipFlag: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '18px',
    marginRight: '8px',
    minWidth: '28px',
  },
  mapTooltipHeader: {
    color:' rgba(255, 255, 255, 1)',
    fontSize: '14px',
    textTransform: 'uppercase',
  },
  margin: {
    display: 'flex',
    margin: '4px',
  },
  mapTooltipLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '11px',
    marginRight: '8px',
    textTransform: 'uppercase',
  },
  mapTooltipValue: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: '12px',
  }
}));
