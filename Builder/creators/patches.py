import os

class PatchSystemBugs:
    @staticmethod
    def enable_all_patches():
        PatchSystemBugs.__OMZ_install()
        PatchSystemBugs.__assign_permissions_to_configs()

    @staticmethod
    def __assign_permissions_to_configs():
        os.system("sudo chmod -R 700 ~/.config/*")

    @staticmethod
    def __OMZ_install():
        os.system('sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"')
