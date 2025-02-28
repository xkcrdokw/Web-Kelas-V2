import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";


const Fade = React.forwardRef(function Fade(props, ref) {
	const { children, in: open, onClick, onEnter, onExited, ownerState, ...other } = props
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		config: {
		  duration: open ? 200 : 50, // Mengatur durasi berdasarkan kondisi open
		},
		onStart: () => {
		  if (open && onEnter) {
			onEnter(null, true);
		  }
		},
		onRest: () => {
		  if (!open && onExited) {
			onExited(null, true);
		  }
		},
	  });
	  
	  
	return (
		<animated.div ref={ref} style={style} {...other}>
			{React.cloneElement(children, { onClick })}
		</animated.div>
	)
})

Fade.propTypes = {
	children: PropTypes.element.isRequired,
	in: PropTypes.bool,
	onClick: PropTypes.any,
	onEnter: PropTypes.func,
	onExited: PropTypes.func,
	ownerState: PropTypes.any,
}


export default function AnggotaKelas() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const anggotaKelas = [
    "Afdal",
    "Andre",
    "Arsavin",
    "Arul",
    "Arya",
    "Dani",
    "Bebas",
    "Cinta",
    "Dewi",
    "Ega",
    "Fajar",
    "Gita",
    "Hana",
    "Ika",
    "Joko",
    "Kiky",
    "Lesti",
    "Mika",
    "Nina",
    "Oka",
    "Puri",
    "Qisty",
    "Rina",
    "Sari",
    "Tina",
    "Uci",
    "Vina",
    "Wina",
    "Xena",
    "Yoga",
    "Zara",
  ];

  return (
    <div>
      <Button onClick={handleOpen}>
        <div className="flex items-center space-x-2 text-white px-6 py-4">
          <span>AnggotaKelas</span>
          <img src="/avatar.png" alt="icon" className="w-6 h-6" />
        </div>
      </Button>
      <Modal
				aria-labelledby="spring-modal-title"
				aria-describedby="spring-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						TransitionComponent: Fade,
					},
				}}>
        <Fade in={open}>
          <Box className="modal-container">
            <Button onClick={handleClose} style={{ position: "absolute", top: "0", right: "0" }}>
              <CloseIcon />
            </Button>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              <h6 className="text-center text-white text-2xl mb-5">Anggota Kelas</h6>
              <div className="h-[22rem] overflow-y-auto">
                {anggotaKelas.length === 0 ? (
                  <p className="text-white text-center">Tidak ada anggota kelas</p>
                ) : (
                  anggotaKelas.map((anggota, index) => (
                    <div key={index} className="flex justify-between items-center px-5 py-2 mt-2">
                      <span className="ml-2 text-white">{anggota}</span>
                    </div>
                  ))
                )}
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
      }
