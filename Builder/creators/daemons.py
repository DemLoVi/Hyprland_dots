import os


class Daemons:
    @staticmethod
    def enable_all_daemons():
        Daemons.__enable_network_daemon()
        Daemons.__enable_VPN_daemons()
        Daemons.__enable_bluetooth_daemon()
        Daemons.__enable_firewall_daemon()

    @staticmethod
    def __enable_network_daemon():
        os.system("sudo systemctl enable NetworkManager")

    @staticmethod
    def __enable_VPN_daemons():
        os.system("sudo systemctl enable warp-svc.service")
        os.system("sudo systemctl enable yggdrasil.service")
    
    @staticmethod
    def __enable_bluetooth_daemon():
        os.system("sudo systemctl enable bluetooth.service")
        os.system("sudo systemctl start bluetooth.service")

    @staticmethod
    def __enable_firewall_daemon():
        os.system("sudo systemct enable ufw.service")
        os.system("sudo systemct start ufw.service")
