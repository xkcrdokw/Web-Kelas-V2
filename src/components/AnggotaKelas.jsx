import React, { useState, useEffect } from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import { useSpring, animated } from "@react-spring/web"
import CloseIcon from "@mui/icons-material/Close"
import Button from "@mui/material/Button"

export default function AnggotaKelas() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const fade = useSpring({
    opacity: open ? 1 : 0,
    config: { duration: 200 },
  })
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
  ]

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        id="AnggotaKelas"
      >
        Anggota Kelas
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <animated.div style={fade}>
          <Box className="modal-container">
            <CloseIcon
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
                color: "grey",
              }}
              onClick={handleClose}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              <h6 className="text-center text-white text-2xl mb-5">Anggota Kelas</h6>
              <div className="h-[22rem] overflow-y-scroll overflow-y-scroll-no-thumb">
                {anggotaKelas.map((anggota, index) => (
                  <div key={index} className="flex justify-between items-center px-5 py-2 mt-2" id="LayoutIsiButtonRequest">
                    <span className="ml-2 text-white">{anggota}</span>
                  </div>
                ))}
              </div>
            </Typography>
          </Box>
        </animated.div>
      </Modal>
    </div>
  )
		      }
