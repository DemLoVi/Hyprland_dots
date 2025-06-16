import os


class Daemons:
    @staticmethod
    def enable_all_daemons():
        Daemons.__enable_network_daemon()
        Deamons.__enable_warp_deamon()
        Daemons.__enable_bluetooth_daemon()

    @staticmethod
    def __enable_network_daemon():
        os.system("sudo systemctl enable NetworkManager")

    @staticmethod
    def __enable_warp_deamon():
        os.system("sudo systemctl enable warp-svc.service")
    
    @staticmethod
    def __enable_bluetooth_daemon():
        os.system("sudo systemctl enable bluetooth.service")
        os.system("sudo systemctl start bluetooth.service")
