import Nav from "@/componets/ui/Navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { CardHoverEffect } from "@/componets/ui/CardHoverEffect";
import { InfiniteMovingCard } from "@/componets/ui/InfiniteMovingCard";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-2 gap-2">
        <div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <h1>Lorem ipsum dolor</h1>
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis.</p>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="solid"
          >
            Find Out More <ArrowRightIcon className="w-5 md:w-6" />
          </Button>
        </div>
        <div>image</div>
      </div>
      <CardHoverEffect />
      <div className="grid grid-cols-2 gap-2">
        <div>image</div>
        <div>
          <small>Welcome to</small>
          <h1>Noble Assisted Living</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sit amet risus at fringilla. Cras id ante mollis, faucibus neque id, varius risus. Suspendisse convallis commodo vehicula. Quisque sapien massa, facilisis nec auctor et, pharetra non arcu. Phasellus efficitur facilisis eros ut lacinia. Cras a porttitor ipsum. Sed semper nibh vel gravida eleifend. Phasellus finibus posuere ipsum vel euismod. Cras iaculis nec nisi in condimentum. Mauris faucibus justo sapien, et vulputate massa varius non. Nulla id suscipit orci, et efficitur tortor.</p>
        </div>
      </div>
      <InfiniteMovingCard />
      <div className="flex justify-between">
        <div>
          <h1>Get in Touch With Us Today!</h1>
          <p>You can send us an <a href="mailto:nobleassistedliving@gmail.com">email</a></p>
          <span>OR</span>
          <p>Call/Text us on 0712345678</p>
        </div>
        <div className="flex gap-28">
          <div className="flex flex-col">
            <h2>Site Navigation</h2>
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Services</Link>
            <Link>Contact Us</Link>
          </div>
          <div className="flex flex-col">
            <h2>Socials</h2>
            <Link>Instagram</Link>
            <Link>Facebook</Link>
            <Link>X</Link>
          </div>
        </div>
        <div>
          Image
        </div>
      </div>
    </>
  );
}
