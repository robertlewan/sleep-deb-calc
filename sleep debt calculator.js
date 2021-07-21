const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
  case 'monday':
    return 6;
    break;
  case 'tuesday':
    return 8;
    break;
  case 'wednesday':
    return 6;
    break;
  case 'thursday':
    return 7;
    break;
  case 'friday':
    return 10;
    break;
  case 'saturday':
    return 10;
    break;
  case 'sunday':
    return 8;
    break;
  }
}

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours*7; //Weekly total preferred hours
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours > idealSleepHours) {
    console.log('You get more sleep than needed');
  } else if (actualSleepHours === idealSleepHours) {
    console.log('You get perfect amount of sleep');
  } else {
    console.log(`You need ${idealSleepHours - actualSleepHours} more hours of sleep`);
  }
}
calculateSleepDebt();