import { Card, CardContent, CardActions, CardMedia } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShieldIcon from '@mui/icons-material/Shield';
import FlareIcon from '@mui/icons-material/Flare';
import Typography from '@mui/material/Typography';
import React from 'react';

import { ICard } from '../../interface';

export interface CardOptions {
	card: ICard;
}

const CustomCard: React.FC<CardOptions> = ({ card }: CardOptions) => {
	return (
		<>
			<Card
				className="customCard"
				style={{
					background: `${card.color}`,
				}}
			>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{card.class}
					</Typography>
					<Typography gutterBottom variant="body2" component="div">
						{card.description}
					</Typography>
				</CardContent>
				<CardActions>
					<Typography gutterBottom variant="body1" component="div">
						<FlashOnIcon />
						{card.attack}
					</Typography>
					<Typography gutterBottom variant="body1" component="div">
						<ShieldIcon />
						{card.def}
					</Typography>
					<Typography gutterBottom variant="body1" component="div">
						<FlareIcon />
						{card.mana}
					</Typography>
				</CardActions>
			</Card>
		</>
	);
};

export default CustomCard;
