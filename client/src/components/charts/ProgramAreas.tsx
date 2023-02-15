import { Box, Typography, Stack } from '@pankod/refine-mui';

import { ProgramAreasInfo } from 'constants/index';

interface ProgressBarProps {
  title: string,
  percentage: number,
  color: string,
}

const ProgressBar = ({title, percentage, color}: ProgressBarProps) => (
  <Box width="100%">
    <Stack 
      direction="row"
      alignItems="center"
      justifyContent="space-between">
        <Typography fontSize={16} fontWeight={500} color="#003441">{title}</Typography>
        <Typography fontSize={16} fontWeight={500} color="#003441">{`${percentage}%`}</Typography>
      </Stack>

      <Box mt={2} position="relative" width="100%" height="8px" borderRadius={1} bgcolor="#FFFFF">
        <Box
        width={`${percentage}%`}
        bgcolor={color}
        position="absolute"
        height="100%"
        borderRadius={1}
        >

        </Box>

      </Box>
  </Box>
)

const ProgramAreas = () => {
  return (
    <Box
      p={4}
      bgcolor="#FFFFFF"
      id="chart"
      minWidth={490}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#008E87">Program Areas</Typography>

      <Stack my="20px" direction="column" gap={4}>
        {ProgramAreasInfo.map((bar) => 
        <ProgressBar key={bar.title} {...bar} /> )}
      </Stack>
    </Box>
  )
}

export default ProgramAreas