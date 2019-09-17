import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import BookingDialogContainer from '../containers/BookingDialogContainer';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    root: {
        flexGrow: 1,
    }
}));

function BookingPanel(props) {
    const classes = useStyles();
    const { currentTabValue, status, master } = props;
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(null);

    function handleClickOpen(id) {
        setOpen(true);
        console.log(id)
        setSelectedValue(id);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container fixed className={classes.root}>
            <Grid container spacing={3}>
                {
                    master && master.resources.map(resource =>
                        <Grid key={resource.name} item xs={6}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h6">
                                        {resource.name}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Typography variant="body2" component="p">
                                        {
                                            master.subResources.map(subResource => {
                                                const id = `${resource.id}x${subResource.id}`;
                                                const isAvaliable = _.isEmpty((status[currentTabValue] || [])
                                                    .find(s => s.id === id)
                                                )

                                                return (
                                                    <Button className={classes.button}
                                                        variant="contained"
                                                        disabled={!isAvaliable}
                                                        size="small"
                                                        onClick={() => handleClickOpen(id)}>
                                                        {subResource.name}
                                                    </Button>
                                                )
                                            }
                                            )
                                        }
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>)
                }

            </Grid>
            <BookingDialogContainer open={open} onClose={handleClose} selectedValue={selectedValue} />
        </Container>
    )
}

export default BookingPanel;
