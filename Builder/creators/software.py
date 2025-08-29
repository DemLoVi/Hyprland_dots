import os
from logger import Logger, LoggerStatus


class AurBuilder:
    @staticmethod
    def build():
        os.system("git -C /tmp clone https://aur.archlinux.org/paru.git")
        os.system("cd /tmp/paru && makepkg -si")

class FirefoxCustomize:
    @staticmethod
    def build():
        os.system("timeout 10 firefox --headless")
        os.system("sh firefox/install.sh")
        Logger.add_record(f"[+] Firefox styles installed", status=LoggerStatus.SUCCESS)
